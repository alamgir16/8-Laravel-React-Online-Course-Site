<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/getCourseFeature', [HomeController::class, 'getCourseFeature']);


//React Default Route Management Panel
Route::get('/', function () {
    return view('index');
});
Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath', '.*');
