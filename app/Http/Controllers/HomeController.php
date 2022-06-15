<?php

namespace App\Http\Controllers;

use App\Models\CourseFeatureModel;

class HomeController extends Controller
{
    public function getCourseFeature()
    {
        $result = CourseFeatureModel::all();
        return $result;
    }
}
