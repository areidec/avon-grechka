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

	//Анимация логотипа
	$('.avon-logo').animate(
		{"opacity":"1"},
		{
			duration: 2000,
			easing: "swing",
			complete: () => {
				$('.avon-logo').delay(1000).animate({"opacity":"0"}, 1000, "swing");
				setTimeout(()=>{
					$('.avon-logo').animate({"left":"-91px"}, 0);
					$('.avon-logo').animate({"opacity":"1"}, 1000, "swing");
				},2000)
			}
		}
	)

	//Анимация листиков
	setTimeout(()=>{
		$('.sheets').animate(
			{"opacity":"1"},
			{
				duration: 1000,
				easing: "swing",
				complete: () => {
					$('.sheets').delay(1000).animate({"opacity":"0"}, 1000, "swing")
				}
			}
		)
	},1000)

	//Анимация плашек
	$('.avon-title').delay(5000).animate({"opacity":"1"}, 1000, "swing")


});
