"use strict";

const setSkyAnimation = (name, property, from, to) => {
		var keys = [
            { frame: 0, value: from },
			{ frame: 100, value: to }
        ];
		
		const propertyAnimation = new BABYLON.Animation(name, property, 100, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
		propertyAnimation.setKeys(keys);

		return propertyAnimation;
};