<?php

use Palasthotel\WordPress\BlockX\Containers\_ContainerType;
use Palasthotel\WordPress\BlockX\Model\Style;
/**
 * @var _ContainerType $container
 * @var Style $style
 */

$columns = $container->columns();
$denominator = 0;
foreach ($columns as $column){
	$denominator+= $column;
}
$typeParts = array_map(function($column) use ( $denominator ) {
	return $column."d".$denominator;
}, $columns);
$type = "c".implode("-", $typeParts);

foreach ($columns as $index => $column){
	$position = $index+1;
	$widthInPercent = round( ($column / $denominator) * 1000) / 10;

    ?>.blockx__container--<?php echo $type ?> .blockx__slot:nth-child(<?php echo $position; ?>){
	flex-grow: <?php echo $column; ?>;
	width: <?php echo $widthInPercent; ?>%;
}
<?php
}

$noColModes = [];


if(!$container->useColumnsInTabletPreview()){
    $noColModes[] = ".preview-mode-Tablet";
}

if(!$container->useColumnsInMobilePreview()){
	$noColModes[] = ".preview-mode-Mobile";
}

if(count($noColModes) > 0){
    $selectors = array_map(function($mode) use ( $type ) {
       return "$mode.blockx__container--$type";
    }, $noColModes);
    echo implode(",", $selectors);
    echo "{display: inherit;}";
	$slotSelectors = array_map(function($selector) {
		return "$selector .blockx__slot";
	}, $selectors);
    echo implode(",",$slotSelectors);
    echo "{flex-grow: inherit; width: inherit; padding: 0; }";

}