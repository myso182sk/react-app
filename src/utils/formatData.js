export function formatData(string) {
    return JSON.stringify( string, null, 2 ).replace(/["{[,\}\]]/g, "");
}

export function formatURL(string) {
    return string.replace( "//uploads", "/uploads" ); 
}