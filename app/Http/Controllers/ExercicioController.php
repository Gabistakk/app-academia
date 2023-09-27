<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;


class ExercicioController extends Controller
{

    public function createExercicios(Request $request){
        $client = new Client(['base_uri' => 'https://api.openai.com/v1/chat/completions',
        'verify' => false, 'charset' => 'utf-8']);


        $response = $client->post('https://api.openai.com/v1/chat/completions', [
            'headers' => [
                'Content-Type' => 'application/json; charset=UTF8',
                'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
            ],
            'json' => [
                "model" => "gpt-3.5-turbo",
                'messages' => [["role" => "user", "content" => 'Crie uma lista de exercicios para ' . $request->input('objetivo'). ' Responda em formato de array apenas os nomes dos exercicios para o objetivo. o array deve ser na mesma linha, SEM PULAR LINHAS. Exemplo : [exercicio 1, exercicio 2 e etc...], 5 exercicios no total.']],
                'temperature' => 0.7,
                'max_tokens' => 60,
            ],
        ]);
        $result = json_decode($response->getBody()->getContents(), true);
        $responseString = response()->json($result['choices'][0]['message']['content']);
        /* $formatedResult = str_replace('\n', '', $responseString);
        $formatedResult = preg_replace('/[^":\w\s]+/', '', $formatedResult); */
        
        $responseString = str_replace(array('[', ']', "'"), '', $responseString);

        $responseString = str_replace('\u00e3', 'ã', $responseString);
        $responseString = str_replace('\u00e7', 'ç', $responseString);


        $responseArray = explode(',', $responseString);
        

        $responseArray = array_map('trim', $responseArray);


        $responseArray = json_encode($responseArray, JSON_UNESCAPED_UNICODE);

        $responseArray = json_decode($responseArray, true, JSON_UNESCAPED_UNICODE);
        
        foreach($responseArray as $exercicio){
            echo $exercicio.PHP_EOL;
        }

    }


}
