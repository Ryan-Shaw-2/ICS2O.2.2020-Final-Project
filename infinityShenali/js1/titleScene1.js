/* global Phaser */

// Copyright (c) 2021 Infinity de Guzman & Shenali Alles All rights reserved
//
// Created by: Infinity de Guzman & Shenali Alles 
// Created on: June 2021
// This is the Title Scene1

class TitleScene1 extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene1' })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#050A30')
  }

  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', 'assets1/titleMenuScene.png')
  }

  create (data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2
  }

  update (time, delta) {
    if (time > 8000) {
      this.scene.switch('menuScene1')
    }
  }
}

export default TitleScene1
