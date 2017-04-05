$.get("feed.php", function(data) {
    var $XML = $(data);
    $XML.find("item").each(function() {
        var $this = $(this),
            item = {
                title:       $this.find("title").text().replace("<![CDATA[", "").replace("]]>", ""),
                link:        $this.find("link").text(),
                description: $this.find("description").text().replace("<![CDATA[", "").replace("]]>", ""),
                pubDate:     $this.find("pubDate").text(),
                author:      $this.find("author").text()
            };
        var div = $('#feed-div');
        var title = div.append($('<h3 style="font-weight: bolder;"/>').text(item.title));
        var decription = div.append($('<div/>').html(item.description));
    });
});