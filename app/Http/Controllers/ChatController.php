<?php
namespace App\Http\Controllers;


use GuzzleHttp\Client;
use Illuminate\Http\Request;



class ChatController extends Controller
{
    public function chat(Request $request)
    {
        $client = new Client(['base_uri' => 'https://api.openai.com/v1/chat/completions',
        'verify' => false]);
        $response = $client->post('https://api.openai.com/v1/chat/completions', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
            ],
            'json' => [
                "model" => "gpt-3.5-turbo",
                'messages' => [["role" => "user", "content" => 'Receite em formato json uma dieta ' . $request->input('message'). ' o json deve ser formatado como: cafeDaManha: (comida), almoco: (comida), cafeDaTarde: (comida), jantar: (comida)']],
                'temperature' => 0.7,
                'max_tokens' => 60,
            ],
        ]);
        $result = json_decode($response->getBody()->getContents(), true);
        $responseString = response()->json($result['choices'][0]['message']['content']);
        $formatedResult = str_replace('\n', '', $responseString);
        $formatedResult = preg_replace('/[^":\w\s]+/', '', $formatedResult);
        return $formatedResult;
    }
}
