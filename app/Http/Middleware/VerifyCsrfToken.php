<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'http://10.112.240.187:8000/chat',
        'http://10.112.240.187:8000/cafe-da-manha',
        'http://10.112.240.187:8000/cafe-da-tarde',
        'http://10.112.240.187:8000/janta',
        'http://10.112.240.187:8000/almoco',
        'http://10.112.240.187:8000/test-api',
        'http://10.112.240.187:8000/criar-exercicios',
        'http://10.112.240.187:8000/user',
    ];
}
