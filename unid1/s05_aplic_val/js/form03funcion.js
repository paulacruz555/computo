function fnGenerarTabla(res,num,nom,ape,tur)
{ 
    document.write(
        
    `
    
	<table border='1'>
		<tr>
			<td colspan="3"> ${num} Col1-fila1</td>
<!--		<td>Col2-fila1</td>
			<td>Col3-fila1</td>		-->
			<td rowspan="3">Col4-fila1</td>
		</tr>
		<tr>
			<td>Col1-fila2</td>
			<td>Col2-fila2</td>
			<td>Col3-fila2</td>
<!--		<td>Col4-fila2</td>	 -->
		</tr>
		<tr>
			<td>Col1-fila3</td>
			<td>Col2-fila3</td>
			<td>Col3-fila3</td>
<!--		<td>Col4-fila3</td>		-->
		</tr>
	</table>
    <br>
    
    `
    );
    //alert(num);
}

function fnTurno(turno)
{

}