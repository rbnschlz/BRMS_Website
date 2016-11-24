<?php

return function($site, $pages, $page) {

 //    // Date
 //    $start = strtotime($first->startdate());
 //    $end = strtotime($first->enddate());
 //    $datestring = returnDate($start, $end);
 //    //Opening
 //    $open =  strtotime($first->openingstart());
 //    $openend =  strtotime($first->openingend());
 //    // Currently Open/Closed
 //    $current_date = strtotime(date('Y-m-d H:i:s'));

	$studio = page("studio");
	$infotext = $studio->about()->kirbytext();
	$email = $studio->email();
	$adresses = $studio->adresses()->toStructure();

    return array(
        'infotext' => $infotext,
        'email' => $email,
        'adresses' => $adresses
    );

};

?>