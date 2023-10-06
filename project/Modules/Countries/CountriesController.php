<?php

declare(strict_types=1);

namespace Modules\Countries;

use App\Core\Controller;
use PDO;

class CountriesController extends Controller
{
  public function __construct()
  {
    parent::__construct();
  }

  public function index(string $id = null)
  {

    $query = "%{$_GET['query']}%";
    $stmt  = $this->db->connection->prepare('SELECT countryname FROM countries WHERE countryname LIKE :name ORDER BY countryname ASC');
    $stmt->bindParam(':name', $query, PDO::PARAM_STR);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    jsonResponse($result);

  }
}
