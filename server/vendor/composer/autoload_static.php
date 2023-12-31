<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7955a2dcf69cf4a51bfb30084f5dea23
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Student\\Server\\' => 15,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Student\\Server\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7955a2dcf69cf4a51bfb30084f5dea23::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7955a2dcf69cf4a51bfb30084f5dea23::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit7955a2dcf69cf4a51bfb30084f5dea23::$classMap;

        }, null, ClassLoader::class);
    }
}
