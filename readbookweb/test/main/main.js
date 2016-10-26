module.exports = {

    '抓取虎航的資料': (browser) => {

        browser.
            url('https://booking.tigerair.com/Search.aspx?culture=zh-TW')
            .waitForElementVisible('body', 1000)
            .end()

    }
}    
