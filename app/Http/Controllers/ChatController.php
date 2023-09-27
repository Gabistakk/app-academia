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
                'messages' => [["role" => "user", "content" => 'Receite uma nutritiva refeição de ' . $request->input('message'). ' Responda apenas uma receita e também apenas o nome da comida nutritiva e nada mais.']],
                'temperature' => 0.7,
                'max_tokens' => 60,
            ],
        ]);
        $result = json_decode($response->getBody()->getContents(), true);
        $responseString = response()->json($result['choices'][0]['message']['content']);
        /* $formatedResult = str_replace('\n', '', $responseString);
        $formatedResult = preg_replace('/[^":\w\s]+/', '', $formatedResult); */
        return $responseString;
    }


    private function sendApiRequest(String $refeicao ,String $objetivo, String $alimento){
        $client = new Client(['base_uri' => 'https://api.openai.com/v1/chat/completions',
        'verify' => false]);

        $response = $client->post('https://api.openai.com/v1/chat/completions', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
            ],
            'json' => [
                "model" => "gpt-3.5-turbo",
                'messages' => [["role" => "user", "content" => 'Receite uma nutritiva refeição de '.$refeicao.' para '. $objetivo. '. A receita deve conter: '.$alimento.'. Responda apenas uma receita e também apenas o nome da comida nutritiva e nada mais.']],
                'temperature' => 0.7,
            ],
        ]);
        $result = json_decode($response->getBody()->getContents(), true);
        $responseString = response()->json($result['choices'][0]['message']['content']);
        return $responseString;
    }

    public function getCafeDaManha(Request $request){
        return $this->sendApiRequest('Café da Manhã' ,$request->input('objetivo'),  implode(' e ',$request->input('alimento')));
    }

    public function getAlmoco(Request $request){
        return $this->sendApiRequest('Almoço', $request->input('objetivo'),  implode(' e ',$request->input('alimento')));
    }

    public function getJanta(Request $request){
        return $this->sendApiRequest('Jantar', $request->input('objetivo'),  implode(' e ',$request->input('alimento')));
    }

    public function getCafeDaTarde(Request $request){
        return $this->sendApiRequest('Café da Tarde' ,$request->input('objetivo'),  implode(' e ',$request->input('alimento')));
    }

    public function testApi(Request $request){
        echo implode(' e ',$request->input('alimento'));
    }
}   
