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
        'http://localhost:8000/chat',
        'http://localhost:8000/cafe-da-manha',
        'http://localhost:8000/cafe-da-tarde',
        'http://localhost:8000/janta',
        'http://localhost:8000/almoco',
        'http://localhost:8000/test-api',
    ];
}
