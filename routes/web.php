<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ChatController;

use App\Http\Controllers\ExercicioController;

use App\Http\Controllers\UserController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/chat', [ChatController::class, 'chat']);

Route::post('/cafe-da-manha', [ChatController::class, 'getCafeDaManha']);

Route::post('/almoco', [ChatController::class, 'getAlmoco']);

Route::post('/janta', [ChatController::class, 'getJanta']);

Route::post('/cafe-da-tarde', [ChatController::class, 'getCafeDaTarde']);

//EXERCICIOS

Route::post('/criar-exercicios', [ExercicioController::class, 'createExercicios']);



Route::post('/test-api', [ChatController::class, 'testApi']);

Route::post('/user', [UserController::class, 'create']);

Route::get('/user', [UserController::class, 'user']);

Route::get('/user', [UserController::class, 'userId']);

Route::put('/user', [UserController::class, 'edit']);







