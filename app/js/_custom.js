

	const photos = {
        'slide1': [
			'./img/kola.jpg',
			'./img/kola.jpg',
			'./img/numbers/2.gif',
			'./img/numbers/3.gif',
			'./img/numbers/4.gif',
			'./img/numbers/5.gif',
			'./img/numbers/6.gif',
			'./img/numbers/7.gif',
			'./img/numbers/8.gif',
			'./img/numbers/9.gif',
			'./img/numbers/10.jpg',
			'./img/numbers/11.jpg',
			'./img/numbers/12.jpg',
		],
        'slide2': [
			'./img/numbers/0.gif',
			'./img/numbers/1.gif',
			'./img/numbers/2.gif',
			'./img/numbers/3.gif',
			'./img/numbers/4.gif',
			'./img/numbers/5.gif',
			'./img/numbers/6.gif',
			'./img/numbers/7.gif',
			'./img/numbers/8.gif',
			'./img/numbers/9.gif',
			'./img/numbers/10.jpg',
			'./img/numbers/19.jpg',
			'./img/numbers/20.jpg',
			'./img/numbers/21.jpg',
			'./img/numbers/0.gif',
			'./img/numbers/0.gif',
			'./img/numbers/1.gif',
			'./img/numbers/2.gif',
			'./img/numbers/3.gif',
			'./img/numbers/4.gif',
			'./img/numbers/5.gif',
			'./img/numbers/6.gif',
			'./img/numbers/7.gif',
			'./img/numbers/8.gif',
			'./img/numbers/9.gif',
			'./img/numbers/10.jpg',
			'./img/numbers/11.jpg',
			'./img/numbers/12.jpg',
			'./img/numbers/13.jpg',
			'./img/numbers/14.jpg',
			'./img/numbers/15.jpg',
			'./img/numbers/16.jpg',
			'./img/numbers/17.jpg',
			'./img/numbers/18.jpg'
        ],
        'slide3': [
			'./img/numbers/0.gif',
			'./img/numbers/1.gif',
			'./img/numbers/2.gif',
			'./img/numbers/3.gif',
			'./img/numbers/4.gif',
			'./img/numbers/5.gif',
			'./img/numbers/6.gif',
			'./img/numbers/7.gif',
			'./img/numbers/8.gif',
			'./img/numbers/9.gif',
			'./img/numbers/10.jpg',
			'./img/numbers/11.jpg',
			'./img/numbers/12.jpg',
			'./img/numbers/4.gif',
			'./img/numbers/0.gif',
			'./img/numbers/1.gif',
			'./img/numbers/2.gif',
			'./img/numbers/3.gif',
			'./img/numbers/4.gif',
			'./img/numbers/5.gif',
		],
		'slide4': [
			'./img/numbers/0.gif',
			'./img/numbers/1.gif',
			'./img/numbers/2.gif',
			'./img/numbers/3.gif',
			'./img/numbers/4.gif',
			'./img/numbers/12.jpg',
			'./img/numbers/13.jpg',
			'./img/numbers/14.jpg',
			'./img/numbers/15.jpg',
			'./img/numbers/16.jpg',
			'./img/numbers/17.jpg',
			'./img/numbers/18.jpg',
			'./img/numbers/19.jpg',
			'./img/numbers/20.jpg',
			'./img/numbers/21.jpg',
			'./img/numbers/0.gif',
			'./img/numbers/0.gif',
			'./img/numbers/1.gif',
			'./img/numbers/2.gif',
			'./img/numbers/3.gif',
			'./img/numbers/4.gif',
			'./img/numbers/5.gif',
			'./img/numbers/6.gif',
			'./img/numbers/7.gif',
			'./img/numbers/8.gif',
			'./img/numbers/9.gif',
			'./img/numbers/10.jpg',
			'./img/numbers/11.jpg',
			'./img/numbers/12.jpg',
			'./img/numbers/13.jpg',
			'./img/numbers/14.jpg',
			'./img/numbers/15.jpg',
			'./img/numbers/16.jpg',
			'./img/numbers/17.jpg',
			'./img/numbers/18.jpg',
		],
		'slide5': [
			'./img/numbers/0.gif',
			'./img/numbers/1.gif',
			'./img/numbers/2.gif',
			'./img/numbers/3.gif',
			'./img/numbers/4.gif',
			'./img/numbers/12.jpg',
			'./img/numbers/13.jpg',
			'./img/numbers/14.jpg',
			'./img/numbers/15.jpg',
			'./img/numbers/16.jpg',
			'./img/numbers/17.jpg',
			'./img/numbers/18.jpg',
			'./img/numbers/19.jpg',
			'./img/numbers/20.jpg',
			'./img/numbers/21.jpg',
			'./img/numbers/0.gif',
			'./img/numbers/0.gif',
			'./img/numbers/1.gif',
			'./img/numbers/2.gif',
			'./img/numbers/3.gif',
			'./img/numbers/4.gif',
			'./img/numbers/5.gif',
			'./img/numbers/6.gif',
			'./img/numbers/7.gif',
			'./img/numbers/8.gif',
			'./img/numbers/9.gif',
			'./img/numbers/10.jpg',
			'./img/numbers/11.jpg',
			'./img/numbers/12.jpg',
			'./img/numbers/13.jpg',
			'./img/numbers/14.jpg',
			'./img/numbers/15.jpg',
			'./img/numbers/16.jpg',
			'./img/numbers/17.jpg',
			'./img/numbers/18.jpg',
		]
	};
	

	

	window.parseImg = (photosJson) => {
		let photos = JSON.parse(photosJson)

		if(photos.slide1.length < 24) {
			var curentInArray = 0;
			for (var i=photos.slide1.length; i<24; i++) {
				photos.slide1.push(photos.slide1[curentInArray]);
				curentInArray++;
			}
		}
	
		if(photos.slide2.length < 42) {
			var curentInArray = 0;
			for (var i=photos.slide2.length; i<42; i++) {
				photos.slide2.push(photos.slide2[curentInArray]);
				curentInArray++;
			}
		}
	
		if(photos.slide3.length < 31) {
			var curentInArray = 0;
			for (var i=photos.slide3.length; i<31; i++) {
				photos.slide3.push(photos.slide3[curentInArray]);
				curentInArray++;
			}
		}
	
		if(photos.slide4.length < 42) {
			var curentInArray = 0;
			for (var i=photos.slide4.length; i<42; i++) {
				photos.slide4.push(photos.slide4[curentInArray]);
				curentInArray++;
			}
		}
	
		if(photos.slide5.length < 42) {
			var curentInArray = 0;
			for (var i=photos.slide5.length; i<42; i++) {
				photos.slide5.push(photos.slide5[curentInArray]);
				curentInArray++;
			}
		}

		for(let i = 1; i <= 7; i++) {
			if(i % 2 === 0) {
				for(let j = 0; j < 4; j++) {
					const columnLength = $(`.column[data-id=${i}]`).children().length + 1;
					const div = $(`<div class="column__photo" />`);
					div.addClass( (columnLength + 2) % 3 === 0 ? 'column__photo_big' : 'column__photo_little');

					const src = photos.slide1.shift();
					const img = $(`<img src="${src}">`)

					div.append(img)
					$(`.column[data-id=${i}]`).append(div)
				}
			} else {
				for(let j = 0; j < 3; j++) {
					const columnLength = $(`.column[data-id=${i}]`).children().length + 1;
					const div = $(`<div class="column__photo" />`)
					div.addClass( (columnLength + 2) % 3 === 0 ? 'column__photo_big' : 'column__photo_little');

					const src = photos.slide1.shift();
					const img = $(`<img src="${src}">`)
					
					div.append(img)
					$(`.column[data-id=${i}]`).prepend(div)
				}
			}
		}
		
		for(let i = 1; i <= 7; i++) {
			for(let j = 0; j < 6; j++) {
				const columnLength = $(`.column[data-id=${i}]`).children().length + 1;
				const div = $(`<div class="column__photo" />`);
				div.addClass( (columnLength + 2) % 3 === 0 ? 'column__photo_big' : 'column__photo_little');

				const src = photos.slide2.shift();
				const img = $(`<img src="${src}">`);

				div.append(img);
				if(i % 2 === 0) {
					$(`.column[data-id=${i}]`).append(div);
				} else {
					$(`.column[data-id=${i}]`).prepend(div);
				}
			}
		}

		for(let i = 1; i <= 7; i++) {
			if(i % 2 === 0) {
				for(let j = 0; j < 5; j++) {
					const columnLength = $(`.column[data-id=${i}]`).children().length + 1;
					const div = $(`<div class="column__photo" />`);
					div.addClass( (columnLength + 2) % 3 === 0 ? 'column__photo_big' : 'column__photo_little');

					const src = photos.slide3.shift();
					const img = $(`<img src="${src}">`)

					div.append(img)
					$(`.column[data-id=${i}]`).append(div)
				}
			} else {
				for(let j = 0; j < 4; j++) {
					const columnLength = $(`.column[data-id=${i}]`).children().length + 1;
					const div = $(`<div class="column__photo" />`)
					div.addClass( (columnLength + 2) % 3 === 0 ? 'column__photo_big' : 'column__photo_little');

					const src = photos.slide3.shift();
					const img = $(`<img src="${src}">`)
					
					div.append(img)
					$(`.column[data-id=${i}]`).prepend(div)
				}
			}
		}
		
		for(let i = 1; i <= 7; i++) {
			for(let j = 0; j < 6; j++) {
				const columnLength = $(`.column[data-id=${i}]`).children().length + 1;
				const div = $(`<div class="column__photo" />`);
				div.addClass( (columnLength + 2) % 3 === 0 ? 'column__photo_big' : 'column__photo_little');

				const src = photos.slide4.shift();
				const img = $(`<img src="${src}">`);

				div.append(img);
				if(i % 2 === 0) {
					$(`.column[data-id=${i}]`).append(div);
				} else {
					$(`.column[data-id=${i}]`).prepend(div);
				}
			}
		}

		for(let i = 1; i <= 7; i++) {
			for(let j = 0; j < 6; j++) {
				const columnLength = $(`.column[data-id=${i}]`).children().length + 1;
				const div = $(`<div class="column__photo" />`);
				div.addClass( (columnLength + 2) % 3 === 0 ? 'column__photo_big' : 'column__photo_little');

				const src = photos.slide5.shift();
				const img = $(`<img src="${src}">`);

				div.append(img);
				if(i % 2 === 0) {
					$(`.column[data-id=${i}]`).append(div);
				} else {
					$(`.column[data-id=${i}]`).prepend(div);
				}
			}
		}
		start()
	}
	

	const start = () => {
		
		$('.avon-intro__text').delay(500).animate( {"opacity":"1"}, 500,"swing");
		$('.avon-intro__cactus, .avon-intro__clevers').delay(1000).animate( {"opacity":"1"}, 500,"swing");
		//останавливаем анимацию
		setTimeout(()=>{
			$('.avon-intro__text').animate().finish();
			$('.avon-intro__cactus, .avon-intro__clevers').animate().finish();
		}, 2000);
		// запускаем пропадание
		setTimeout(()=>{
			$('.avon-intro__text').animate( {"opacity":"0"}, 500,"swing");
			$('.avon-intro__cactus, .avon-intro__clevers').animate( {"opacity":"0"}, 500,"swing");
		},2500);
		setTimeout(()=>{
			$('.avon-intro__text').animate().finish();
			$('.avon-intro__cactus').animate().finish();
			$('.avon-intro__cactus').css({"left":"-214px"});
			$('.avon-intro').css({"left":"330px"});
			$('.avon-intro__text, .avon-intro__cactus').animate( {"opacity":"1"}, 500,"swing");
		}, 5000);


			// Анимация фоток
		setTimeout(()=>{
			const oddCols = $('.column:nth-child(odd)')
			const evenCols = $('.column:nth-child(even)')
		
			const custom = CustomEase.create("custom", "M0,0,C0,0,0,0.497,0.248,0.746,0.499,0.997,1,1,1,1")
			const custom2 = CustomEase.create("custom_2", "M0,0,C0,0,0.499,0.102,0.499,0.499,0.499,0.853,1,1,1,1")
			
			// Нечетные колонки анимация
			TweenLite.to(oddCols, 2.5, { ease: custom, y: 256});
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 441 }).delay(2.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 626 }).delay(5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 811 }).delay(7.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 986 }).delay(10);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 1171 }).delay(12.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 1356 }).delay(15);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 1541 }).delay(17.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 1726 }).delay(20);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 1911 }).delay(22.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 2096 }).delay(25);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 2281 }).delay(27.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 2466 }).delay(30);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 2651 }).delay(32.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 2651 }).delay(32.5);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 2836 }).delay(35);
			TweenLite.to(oddCols, 2.5, { ease: custom2, y: 3021 }).delay(37.5);
			
			//четный
			TweenLite.to(evenCols, 2.5, { ease: custom, y: -430});
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -617 }).delay(2.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -802 }).delay(5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -987 }).delay(7.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -1169 }).delay(10);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -1354 }).delay(12.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -1539 }).delay(15);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -1724 }).delay(17.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -1909 }).delay(20);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -2094 }).delay(22.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -2279 }).delay(25);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -2454 }).delay(27.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -2639 }).delay(30);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -2824 }).delay(32.5);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -3000 }).delay(35);
			TweenLite.to(evenCols, 2.5, { ease: custom2, y: -3175 }).delay(37.5);

		}, 3500)	

		// Анимация титров
		setTimeout(()=>{
			$('.titr_1').animate( {"opacity":"1"}, 500,"swing");
		},6500)

		setTimeout(()=>{
			$('.titr_1').animate( {"opacity":"0"}, 500,"swing");
		},14000)
		setTimeout(()=>{
			$('.titr_2').animate( {"opacity":"1"}, 500,"swing");
		},14500)

		setTimeout(()=>{
			$('.titr_2').animate( {"opacity":"0"}, 500,"swing");
		},22000)
		setTimeout(()=>{
			$('.titr_3').animate( {"opacity":"1"}, 500,"swing");
		},22500)

		setTimeout(()=>{
			$('.titr_3').animate( {"opacity":"0"}, 500,"swing");
		},30000)
		setTimeout(()=>{
			$('.titr_4').animate( {"opacity":"1"}, 500,"swing");
		},30500)

		setTimeout(()=>{
			$('.titr_4').animate( {"opacity":"0"}, 500,"swing");
			$('.avon-titres').animate( {"opacity":"0"}, 500,"swing");
			$('.avon-intro').animate({"opacity":"0"}, 500,"swing");
		},38000)

		setTimeout(()=>{
			$('.avon-titres').css({"left":"50px", "top":"112px"});
			$('.avon-titres').animate( {"opacity":"1"}, 500,"swing");
			$('.avon-intro__text svg').css({"width":"316px"});
			$('.avon-intro').css({"left":"1060px", "top":"50%", "z-index":"11"});
			$('.avon-intro__cactus').css({"opacity":"0"});
			$('.avon-intro').animate({"opacity":"1"}, 500,"swing");
			$('.titr_5').animate( {"opacity":"1"}, 300,"swing");
		},38500) 
		// 38500
		setTimeout(()=>{
			$('.photo-gallery').animate( {"opacity":"0"}, 500,"swing");
			$('.avon-intro').animate( {"opacity":"0"}, 500,"swing");
			$('.avon-titres').animate( {"opacity":"0"}, 500,"swing");
		},44000)

		setTimeout(()=>{
			$('.avon-logo__text').animate( {"opacity":"1"}, 500,"swing");
			$('.avon-logo__text').delay(500).animate( {"left":"0"}, 500,"swing");
			$('.avon-logo__left-sheets, .avon-logo__right-sheet').delay(1000).animate( {"opacity":"1"}, 500,"swing");
			$('.avon-logo_h3').delay(1000).animate( {"opacity":"1"}, 500,"swing");
		}, 45000)

	};

	window.start = start;
