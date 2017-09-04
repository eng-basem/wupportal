<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Address Entity
 *
 * @property string $id
 * @property float $latitude
 * @property float $longitude
 * @property string $street
 * @property string $house_number
 * @property string $postal_code
 * @property string $place
 * @property string $suburb_id
 *
 * @property \App\Model\Entity\Suburb $suburb
 * @property \App\Model\Entity\Activity[] $activities
 * @property \App\Model\Entity\Organisation[] $organisations
 */
class Address extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        '*' => true,
        'id' => false
    ];
}