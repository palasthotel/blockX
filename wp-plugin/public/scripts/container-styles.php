<?php

defined( 'ABSPATH' ) || exit;

use Palasthotel\WordPress\BlockX\Containers\_ContainerType;
use Palasthotel\WordPress\BlockX\Model\Styles;
/**
 * @var _ContainerType $container
 * @var Styles $style
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

$breakpoint = $container->breakpoint();

if( $breakpoint > 0 ) echo "@media screen and (min-width:" . (int) $breakpoint . "px) {\n";

    $containerType = ".blockx__container--$type";

echo esc_attr( $containerType ) ?>{
    display: flex;
    flex-wrap: nowrap;
    --blockx-slot-padding: 5px;
}
<?php
echo esc_attr( $containerType ) ?> .blockx__slot{
    min-height: 20px;
    padding: 0 var(--blockx-slot-padding);
}
<?php
echo esc_attr( $containerType ) ?> .blockx__slot:last-child{
    padding-right: 0;
}
<?php
echo esc_attr( $containerType ) ?> .blockx__slot:first-child {
    padding-left: 0;
}
<?php

foreach ($columns as $index => $column){
    $position = $index+1;
    $widthInPercent = round( ($column / $denominator) * 1000) / 10;

echo esc_attr( $containerType ) ?> .blockx__slot:nth-child(<?php echo (int) $position; ?>){
    flex-grow: <?php echo (float) $column; ?>;
    width: <?php echo (float) $widthInPercent; ?>%;
}
<?php

}
if($breakpoint > 0) echo "\n}\n";
