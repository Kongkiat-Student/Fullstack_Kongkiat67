function censorString(sentece , wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const censoredSentence = sentece.replace(regex, '***'); 
    return censoredSentence;
}

const originalSentence = "JavaSript is fun, but sometimes javascript can be tricky.";
const cleanPost = censorString(originalPost, "JavaScript");
console.log(cleanPost);