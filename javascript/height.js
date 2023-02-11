let x = window.innerHeight-document.querySelector('header').offsetHeight;
document.querySelector('.hero').setAttribute('style', 'height:'+x+'px;');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let speed = 150;

let arr = ["Java", "JDBC", "HTML", "CSS", "Javascript", "CSS Frameworks", "JS Frameworks"]
const type2 = async (text) => {
	for(let m = 0; m!=-2; m++){
		for(let l = 0; l<arr.length; l++){
			text = arr[l]
			for(let i = 0;i<=text.length; i++){
				await sleep(speed)
				document.querySelector('.text2').innerHTML += text.charAt(i);
			}
			await sleep(300);
			for(let j = text.length;j!=0; j--){
				await sleep(75)
				document.querySelector('.text2').innerHTML = text.slice(0, -1);
				text = text.slice(0, -1);
			}
		}
	}
	
}

type2("1");