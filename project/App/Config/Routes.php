<?php

declare(strict_types=1);

namespace App\Config;

use Framework\App;
use Modules\Countries\CountriesController;

function registerRoutes(App $app)
{
  $app->get('/search-country', [CountriesController::class]);

  $app->get('/second/{id}', [CountriesController::class, 'loadSecond']);
  $app->get('/third/{id}', [CountriesController::class, 'loadThird']);
}
