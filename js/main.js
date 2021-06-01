let arr1 = [['./pictures/grids/grid1/12.png', './pictures/grids/grid1/11.png', './pictures/grids/grid1/10.png'], ['./pictures/grids/grid1/9.png', './pictures/grids/grid1/8.png', './pictures/grids/grid1/7.png'], ['./pictures/grids/grid1/6.png', './pictures/grids/grid1/5.png', './pictures/grids/grid1/4.png'], ['./pictures/grids/grid1/3.png', './pictures/grids/grid1/2.png', './pictures/grids/grid1/0.png']];
let arr2 = [['./pictures/grids/grid2/12.png', './pictures/grids/grid2/11.png', './pictures/grids/grid2/10.png'], ['./pictures/grids/grid2/9.png', './pictures/grids/grid2/8.png', './pictures/grids/grid2/7.png'], ['./pictures/grids/grid2/6.png', './pictures/grids/grid2/5.png', './pictures/grids/grid2/4.png'], ['./pictures/grids/grid2/3.png', './pictures/grids/grid2/2.png', './pictures/grids/grid2/0.png']];
var arr = [[],[],[],[]];
var cc;
var blankI = [];
function startgame(c) 
{
    if (c == 1) 
    {
        for (let i = 0; i < 4; i++) 
        {
            for (let j = 0; j < 3; j++) 
            {
                arr[i][j]=arr1[i][j];
            }
        }
    }
    if (c == 2) 
    {
        for (let i = 0; i < 4; i++) 
        {
            for (let j = 0; j < 3; j++) 
            {
                arr[i][j]=arr2[i][j];
            }
        }
    }
    randomise(arr);
    document.getElementById('intro').style.display = 'none';
    document.getElementById('game-grid').style.display = 'block';
    cc = c;
    draw();
}
function draw() 
{
    for (let i = 0; i < 4; i++) 
    {
        for (let j = 0; j < 3; j++) 
        {
            document.getElementById((i + 1) + 'x' + (j + 1)).innerHTML = `<img src="${arr[i][j]}" alt="image block" class="picture">`;
        }
    }
}
function control(ct) 
{
    console.log(ct)
    let temp;
        if(ct=='l')
        {
            if (!blankI[1] == 0) 
            {
                temp = document.getElementById((blankI[0] + 1) + 'x' + (blankI[1] + 1)).innerHTML;
                document.getElementById((blankI[0] + 1) + 'x' + (blankI[1] + 1)).innerHTML = document.getElementById((blankI[0] + 1) + 'x' + (blankI[1])).innerHTML;
                document.getElementById((blankI[0] + 1) + 'x' + (blankI[1])).innerHTML = temp;
                temp = arr[blankI[0]][blankI[1]];
                arr[blankI[0]][blankI[1]] = arr[blankI[0]][blankI[1]-1];
                arr[blankI[0]][blankI[1]-1] =temp;
                blankI[1]--;
                console.log(blankI);
            }
        }
        if (ct=='r')
        {
            if (blankI[1] !== 2) 
            {
                temp = document.getElementById((blankI[0] + 1) + 'x' + (blankI[1] + 1)).innerHTML;
                document.getElementById((blankI[0] + 1) + 'x' + (blankI[1] + 1)).innerHTML = document.getElementById((blankI[0] + 1) + 'x' + (blankI[1] + 2)).innerHTML;
                document.getElementById((blankI[0] + 1) + 'x' + (blankI[1] + 2)).innerHTML = temp;
                temp = arr[blankI[0]][blankI[1]];
                arr[blankI[0]][blankI[1]] = arr[blankI[0]][blankI[1]+1];
                arr[blankI[0]][blankI[1]+1] =temp;
                blankI[1]++;
                console.log(blankI);
            }
        }
        if (ct== 'u')
        {
            if (!blankI[0] == 0) 
            {
                temp = document.getElementById((blankI[0] + 1) + 'x' + (blankI[1] + 1)).innerHTML;
                document.getElementById((blankI[0] + 1) + 'x' + (blankI[1] + 1)).innerHTML =  document.getElementById((blankI[0]) + 'x' + (blankI[1] + 1)).innerHTML;
                document.getElementById((blankI[0]) + 'x' + (blankI[1] + 1)).innerHTML = temp;
                temp = arr[blankI[0]][blankI[1]];
                arr[blankI[0]][blankI[1]] = arr[blankI[0]-1][blankI[1]];
                arr[blankI[0]-1][blankI[1]] =temp;
                blankI[0]--;
                console.log(blankI);
            }
        }
        if (ct=='d')
        {
            if (!blankI[1] !== 3) 
            {
                temp = document.getElementById((blankI[0] + 1) + 'x' + (blankI[1] + 1)).innerHTML;
                document.getElementById((blankI[0] + 1) + 'x' + (blankI[1] + 1)).innerHTML = document.getElementById((blankI[0] + 2) + 'x' + (blankI[1] + 1)).innerHTML;
                document.getElementById((blankI[0] + 2) + 'x' + (blankI[1] + 1)).innerHTML = temp;                
                temp = arr[blankI[0]][blankI[1]];
                arr[blankI[0]][blankI[1]] = arr[blankI[0]+1][blankI[1]];
                arr[blankI[0]+1][blankI[1]] =temp;
                blankI[0]++;
                console.log(blankI);
            }
        }
        console.log(blankI);
        check();
}
function showimage() 
{
    document.getElementById(`pic ${cc}`).style.display = 'block';
    document.getElementById('hide').style.display = 'block';
}
function hideimage() 
{
    document.getElementById(`pic ${cc}`).style.display = 'none';
    document.getElementById('hide').style.display = 'none';
}
function randomise(ar) 
{
    let count = 0;
    let arC = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            arC[count] = ar[i][j];
            count++
        }
    }
    for (let i = arC.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));
        [arC[i], arC[j]] = [arC[j], arC[i]];
    }
    count = 0;
    for (let i = 0; i < 4; i++) 
    {
        for (let j = 0; j < 3; j++) 
        {
            ar[i][j] = arC[count];
            count++
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) 
        {
            if (ar[i][j][23] == '0')
                blankI = [i, j];
        }
    }
}
function check()
{
    let ctt=0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) 
        {
            if (arr[i][j]==arr1[i][j])
                ctt++;
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) 
        {
            if (arr[i][j]==arr2[i][j])
                ctt++;
        }
    }
    if(ctt==12)
    {
        document.getElementById('remove-after-game').style.display = 'none';
        alert('You win... Refresh page to play again');
    }
    // if(arr==arr2)
    // {
    //     document.getElementById('remove-after-game').style.display = 'none';
    //     alert('You win');
    // }
}