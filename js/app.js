let url = window.location.href
let swDirect = "/Practica/sw.js"

if(navigator.serviceWorker){
    if(url.includes("localhost")){swDirect='/sw.js'}
    navigator.serviceWorker.register(swDirect);
}

if(window.caches){
    caches.open('prueba')
    caches.open('prueba-2')

    caches.has('prueba')
        .then((result)=>{
            console.log(result);
    })

    caches.open('cache1').then((cache)=>{
        cache.addAll([
            '/Practica/index.html',
            "/Practica/css/pages.css",
            "/Practica/img/img2.jpg",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        ]).then(()=>{
            //cache.delete('/css/page.css')
            //cache.put('index.html', new Response('Actualizado desde cache'))
        });

        cache.match('index.html')
            .then((res)=>{
                res.text().then((trxt)=>{console.log(trxt)})
                console.log(res)
            })
    })

    caches.keys()
        .then((keys)=>{
            console.log(keys)
        })
}
