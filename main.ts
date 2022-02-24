namespace SpriteKind {
    export const Hoop = SpriteKind.create()
    export const Basket = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 f 4 4 . . . . . 
        . . . . . f 4 4 f 4 4 f . . . . 
        . . . . 4 4 f 4 f 4 f 4 4 . . . 
        . . . . 4 4 f 4 f 4 f 4 4 . . . 
        . . . . f f f f f f f f f . . . 
        . . . . 4 4 f 4 f 4 f 4 4 . . . 
        . . . . 4 4 f 4 f 4 f 4 4 . . . 
        . . . . . f 4 4 f 4 4 f . . . . 
        . . . . . . 4 4 f 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Basket, function (sprite, otherSprite) {
    game.over(true)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`BBall Court`)
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(80, 112)
mySprite.setVelocity(50, 0)
mySprite.setBounceOnWall(true)
let mySprite2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    22222222222222222222222222222222
    2..............................2
    22.....11111111111111111......22
    .2.....1.....44444.....1......2.
    .22....111...44444...111.....22.
    ..2......1111444441111.......2..
    ..2222222222244444222222222222..
    .............44444..............
    ............4444444.............
    ..........444...1.444...........
    .........44.1..1..1.44..........
    .........4...1.1.1..14..........
    ........4411..1111.1144.........
    ........4...111..11...4.........
    ........4..11.....1...4.........
    ........411.1.....1..14.........
    ........4...1.....111.4.........
    ........4..111...11...4.........
    ........441..11111.11.4.........
    .........4...1.1.1...4..........
    .........44.1..1..1.44..........
    ..........444...1.444...........
    ............4444444.............
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Hoop)
mySprite2.setPosition(81, 16)
let mySprite3 = sprites.create(img`
    1 1 1 1 
    . . . . 
    . . . . 
    . . . . 
    `, SpriteKind.Basket)
mySprite3.setPosition(81, 20)
