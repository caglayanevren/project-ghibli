const download = require('image-downloader')

var ids = [];
for (var i = 1; i <= 50; i++) {
    var zero;
    if (/^\d$/.test(i)) {
        zero = "00"
    } else {
        zero = "0"
    }
    ids.push(zero + i);
}

ids.forEach(id => {
    const options = [{
            url: `http://www.ghibli.jp/gallery/marnie${id}.jpg`,
            dest: './ghibli/marnie/'
        },
        {
            url: `http://www.ghibli.jp/gallery/kaguyahime${id}.jpg`,
            dest: './ghibli/kaguyahime/'
        },
        {
            url: `http://www.ghibli.jp/gallery/kazetachinu${id}.jpg`,
            dest: './ghibli/kazetachinu/'
        },
        {
            url: `http://www.ghibli.jp/gallery/kokurikozaka${id}.jpg`,
            dest: './ghibli/kokurikozaka/'
        },
        {
            url: `http://www.ghibli.jp/gallery/karigurashi${id}.jpg`,
            dest: './ghibli/karigurashi/'
        },
        {
            url: `http://www.ghibli.jp/gallery/ponyo${id}.jpg`,
            dest: './ghibli/ponyo/'
        },
        {
            url: `http://www.ghibli.jp/gallery/ged${id}.jpg`,
            dest: './ghibli/ged/'
        },
        {
            url: `http://www.ghibli.jp/gallery/chihiro${id}.jpg`,
            dest: './ghibli/chihiro/'
        }
    ];
    options.forEach(option => {
        download.image(option)
            .then(({
                filename
            }) => {
                console.log('Saved to', filename)
            })
            .catch((err) => console.error(err))
    })
})