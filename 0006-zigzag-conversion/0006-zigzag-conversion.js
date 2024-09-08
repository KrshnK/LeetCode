// Discord Que for Unmute
function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;
    
    let rows = Array.from({ length: Math.min(numRows, s.length) }, () => "");
    let currRow = 0, down = false;
    
    for (let char of s) {
        rows[currRow] += char;
        if (currRow === 0 || currRow === numRows - 1) down = !down;
        currRow += down ? 1 : -1;
    }
    
    return rows.join('');
}