document.addEventListener("DOMContentLoaded", function() {

	// fetch('http://localhost:3000/photos.json')
	// 	.then( response => {
	// 		return response.json()
	// 	})
	// 	.then( json => {
	// 		addPhoto(json, 0, 9);
	// 	})
	
	// 	const addPhoto = (json, index, index_max) => {
	// 		for(index; index < json.length; index++) {
	// 			console.log(index)
	// 			if(index === index_max) {
	// 				break;
	// 			}
	
	// 		}
	// 		console.log("index after cicle", index);
	// 	};


	const start = () =>{
		
	}

	//Анимация логотипа текст
	$('.avon-logo__text').delay(500).animate( {"opacity":"1"}, 500,"swing");
	$('.avon-logo__left-sheets, .avon-logo__right-sheet').delay(1000).animate( {"opacity":"1"}, 500,"swing");
	$('.sheets').delay(1500).animate( {"opacity":"1"}, 500,"swing");
	//останавливаем анимацию
	setTimeout(()=>{
		$('.avon-logo__text').animate().finish();
		$('.avon-logo__left-sheets, .avon-logo__right-sheet').animate().finish();
		$('.sheets').animate().finish();
	}, 2000);
	// запускаем пропадание
	setTimeout(()=>{
		$('.avon-logo__text').animate( {"opacity":"0"}, 500,"swing");
		$('.avon-logo__left-sheets, .avon-logo__right-sheet').animate( {"opacity":"0"}, 500,"swing");
		$('.sheets').animate( {"opacity":"0"}, 500,"swing");
	},2500);
	setTimeout(()=>{
		$('.avon-logo__text').animate().finish();
		$('.avon-logo__left-sheets, .avon-logo__right-sheet').animate().finish();
		$('.sheets').animate().finish();
		$('.avon-logo').css({"left":"320px"});
		$('.avon-logo__left-sheets img:nth-child(1)').css({"opacity":"0"});
		$('.avon-logo__left-sheets img:nth-child(2)')
			.css({"transform":"rotate(-131deg) skewX(-10deg)", "height":"464px", "left":"-210px", "top":"-99px" });
	},3000);



	//Анимация фоток

	//1 titr
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-2700px"}, 1500);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-2660px"}, 1500);
		},1500)
	},3500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-99px"}, 1500);
		setTimeout(()=>{
			$('.column:nth-child(even)').animate({"top":"-172px"}, 1500);
		},1500);
	},3500);
	// 2/4
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-2547px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-2475px"}, 1100);
		},500)
	},6500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-314px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-353px"}, 1100);
		},500)
	},6500);
	// 3/4
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-2330px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-2293px"}, 1100);
		},500)
	},8500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-482px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-539px"}, 1100);
		},500)
	},8500);
	// 4/4
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-2180px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-2116px"}, 1100);
		},500)
	},10500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-676px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-717px"}, 1100);
		},500)
	},10500);

	//2 titr
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-1984px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-1929px"}, 1100);
		},500)
	},12500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-830px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-902px"}, 1100);
		},500)
	},12500);

	// 2/4
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-1828px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-1750px"}, 1100);
		},500)
	},14500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-1058px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-1081px"}, 1100);
		},500)
	},14500);

	// 3/4

	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-1600px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-1566px"}, 1100);
		},500)
	},16500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-1184px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-1264px"}, 1100);
		},500)
	},16500);

	// 4/4

	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-1459px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-1384px"}, 1100);
		},500)
	},18500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-1412px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-1446px"}, 1100);
		},500)
	},18500);

	// 3 titr
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-1231px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-1201px"}, 1100);
		},500)
	},20500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-1552px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-1626px"}, 1100);
		},500)
	},20500);

	// 2/4
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-1103px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-1018px"}, 1100);
		},500)
	},22500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-1771px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-1810px"}, 1100);
		},500)
	},22500);

	// 3.4
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-883px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-839px"}, 1100);
		},500)
	},24500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-1901px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-1990px"}, 1100);
		},500)
	},24500);

	// 4/4
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-740px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-654px"}, 1100);
		},500)
	},26500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-2142px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-2174px"}, 1100);
		},500)
	},26500);

	// 4 titr

	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-513px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-474px"}, 1100);
		},500)
	},28500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-2275px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-2353px"}, 1100);
		},500)
	},28500);

	// 2/4

	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-370px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-289px"}, 1100);
		},500)
	},30500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-2506px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-2537px"}, 1100);
		},500)
	},30500);

	// 3/4
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"-151px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(odd)').animate({"top":"-109px"}, 1100);
		},500)
	},32500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-2623px"}, 900);
		setTimeout(()=> {
			$('.column:nth-child(even)').animate({"top":"-2717px"}, 1100);
		},500)
	},32500);

	// 4/4
	setTimeout(()=>{
		$('.column:nth-child(odd)').animate({"top":"16px"}, 900);
		// setTimeout(()=> {
		// 	$('.column:nth-child(odd)').animate({"top":"74px"}, 1500);
		// },500)
	},34500);

	setTimeout(()=>{
		$('.column:nth-child(even)').animate({"top":"-2901px"}, 900);
		// setTimeout(()=> {
		// 	$('.column:nth-child(even)').animate({"top":"-2899px"}, 1500);
		// },500)
	},34500);

	//Анимация титров
	setTimeout(()=>{
		$('.avon-logo__text').animate( {"opacity":"1"}, 500,"swing");
		$('.avon-logo__left-sheets').animate( {"opacity":"1"}, 500,"swing");
	}, 3500);
	setTimeout(()=>{
		$('.titr_1').animate( {"opacity":"1"}, 500,"swing");
	},4000)

	setTimeout(()=>{
		$('.titr_1').animate( {"opacity":"0"}, 500,"swing");
	},10500)
	setTimeout(()=>{
		$('.titr_2').animate( {"opacity":"1"}, 500,"swing");
	},11000)

	setTimeout(()=>{
		$('.titr_2').animate( {"opacity":"0"}, 500,"swing");
	},18500)
	setTimeout(()=>{
		$('.titr_3').animate( {"opacity":"1"}, 500,"swing");
	},19000)

	setTimeout(()=>{
		$('.titr_3').animate( {"opacity":"0"}, 500,"swing");
	},26500)
	setTimeout(()=>{
		$('.titr_4').animate( {"opacity":"1"}, 500,"swing");
	},27000)

});
