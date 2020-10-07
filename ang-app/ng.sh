#!/usr/bin/env php
<?php

	$arr = explode('/',__DIR__);
	array_pop($arr);
    $baseDir = implode('/',$arr);
    $staticFilesDir = $baseDir . "/static_files";
    $angAppDir = $baseDir . "/ang-app";
    
    $env = 'prod';
    if(null==$argv[1] || trim($argv[1]) != $env){
        $env = 'dev';
    } 
    if($env == 'dev'){
    	$output = shell_exec('sudo cp ' . $staticFilesDir . '/angular_dev.json ' . $angAppDir . '/angular.json');
    	echo $output;
    }else{
    	$output = shell_exec('sudo cp ' . $staticFilesDir . '/angular_prod.json ' . $angAppDir . '/angular.json');
    	echo $output;
    }
    
    $output = shell_exec('ng build --prod');
    echo $output;
    
?>












