//onEvent('block.registry', event => {
StartupEvents.registry('block', event => {
    event.create('mammothwool')
    .displayName('Mammoth Wool')
    .material('wool')
    .hardness(0.8)
    .resistance(1.5)
    .tagBlock('minecraft:mineable/shovel')
    .tagBlock('minecraft:wool')
    .requiresTool(false)
})

//onEvent('item.registry', event => {
StartupEvents.registry('item', event => {
    event.create('thick_string').displayName('§7Thick String')
})
//onEvent('mob_effect.registry', => {
StartupEvents.registry('mob_effect', event => {
    event.create('heavy').modifyAttribute('forge:entity_gravity',
    '60227fd8-596d-11ee-8c99-0242ac120002',
    2, 'multiply_total').color(Color.BLACK)
})
