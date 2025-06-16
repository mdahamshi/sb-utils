
const INFO = {
    site: 'https://sarawebs.com',
    company: 'SaraWebs',
    year: new Date().getFullYear()

}    
/**
 * 
 * @param {string} prefix prefix to add before the generated id
 * @returns random id with prefix
 * 
 * example: generateID('myapp') : retruns 'myapp-XXXXXXXX'
 * if no prefix provided: 'XXXXXXXXX'
 */
function generateID(prefix = ''){
    prefix = (prefix ? prefix + '-' : prefix);
    return prefix + crypto.randomUUID().toString().substring(0,8);
}
/**
 * 
 * @param {String} title title of the app
 * Function to add copyright to footer, uses the const INFO site as website
 * company as company name
 */
function addCopyRight(title = 'This WebSite'){
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.style.textAlign = 'center';
    p.innerHTML = `
    ${title} © ${INFO.year}<br>Built with love by 
    <a href="${INFO.site}" style="color: #207de9;text-decoration: none;">${INFO.company}</a>
    `;
    
    div.appendChild(p);
    const footer = document.querySelector('footer');
    footer.appendChild(div);

}

/**
 * 
 * @param {Number} rows number of rows
 * @param {Number} cols number of columns
 * @param {Function} pushFunc function to apply on each row cols times
 * example: (boardRow) => {boardRow.push(new Cell())}
 * @returns board[rows][cols]
 */
function createBoard(rows, cols, pushFunc){
    let board = [];
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            pushFunc(board[i]);
        }
    }
    return board;
}

function getRandomColor(nice){
    let sb_colors = [   '#8e1330', '#8a6c1d', '#406555'
        , '#7c0e45', '#8d1978', '#181770', '#cc38d7', '#47504e', '#0fa080', '#0f64a0', '#460fa0'
        , '#a00f65', '#a00f24', '#0f94a0', '#0fa067', '#0fa03c', '#38a00f', '#a09d0f', '#a0670f'
        , '#a0370f', '#a00f0f', '#2b634d', '#2b4c63', '#2e6bc6', '#1992d4'
        ];

        let randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
        if(nice)
            randomColor = sb_colors[Math.floor(Math.random()*sb_colors.length)];
        return randomColor;
}

const sb_utils = {generateID, addCopyRight, createBoard, getRandomColor};
document.sb = sb_utils
export {sb_utils};
