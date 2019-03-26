module demo1 {
    var squareItSimple = function (h: number, w: number) {
        return h * w
    }

    var squareItSimplest = ( h: number, w: number) => h * w;
    
    var helloWorld : (name?: string ) => void
    helloWorld = (name?: string) => {
        console.log('Hello ' + (name || ' unknown person'))
    }
    helloWorld()
    helloWorld('John')
}
