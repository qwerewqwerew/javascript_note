/* 자리배치도 */
/* 총입장객과 한줄에 앉을 인원을  입력받아 좌석배치도를 출력하는 프로그램을 만드시오 */
//전체 입장객
var memNum = prompt("입장객은 몇명인가요?");	//td의 총갯수
//한줄에 앉을 사람
var colNum = prompt("한 줄에 몇명씩 앉습니까?");//tr에 포함될 td 갯수
var i,j,rowNum;


if (memNum % colNum === 0) {
	//tr
	rowNum = parseInt(memNum / colNum);
} else {
	rowNum = parseInt(memNum / colNum) + 1;
}
document.write("모두"+rowNum+"개의 줄이 필요합니다")
//table>tr>td
//총인원 5(memNum), 한줄에 앉을 인원 2(colNum),
document.write("<table>");
for(i=0; i<rowNum; i++){//i=tr
	document.write("<tr>");
	for(j=1; j<=colNum; j++){
		var seatNo=i*colNum+j;
		if(seatNo>memNum) break;
		document.write("<td>좌석"+ seatNo +"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");