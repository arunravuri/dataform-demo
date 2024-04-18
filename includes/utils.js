// Define a JavaScript function to strip HTML tags and clean up text
function stripHtmlTags(html) {
  return `
        TRIM(
            REGEXP_REPLACE(
                REGEXP_REPLACE(
                    REPLACE(
                        REPLACE(${html}, '&nbsp;', ' '),
                    '\\u00A0',
                    ' '
                    ), 
                    r'<[^>]*>', 
                    ' '
                ), 
                r'\\s+', 
                  ' '
            )
        )`;
}

module.exports = { stripHtmlTags };
