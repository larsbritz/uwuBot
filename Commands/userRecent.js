async function getRecent(message) {
    let contentArgs = message.content.split(" ");
    var name;
    if (contentArgs[1] == null) {
        switch (message.author.username) {
            case "ackhack":
                name = "ackh4ck";
                break;
            case "Human Daniel":
                name = "daninator";
                break;
            case "DragonHunter428":
                name = "DH428";
                break;
            default:
                return "No User given";
        }
    } else {
        name = contentArgs[1];
    }

    s = osuAPI.getUserRecent({ u: name }).then( //osuAPI-Call
        async result => {

            recentScore = result[0];

            var Acc = recentScore.accuracy * 100;

            let endMessage = "Score:    ".concat(recentScore.score)
                .concat("\nCombo:    ").concat(recentScore.maxCombo)
                .concat("\nTitle:    ").concat(recentScore.beatmap.title)
                .concat("\Link:      ").concat("https://osu.ppy.sh/beatmapsets/").concat(recentScore.beatmap.beatmapSetId)
                .concat("\nDiff:     ").concat(recentScore.beatmap.version)
                .concat("\nStarDiff: ").concat(recentScore.beatmap.difficulty.rating)
                .concat("\nBPM:      ").concat(recentScore.beatmap.bpm)
                .concat("\nAcc:      ").concat(Acc).concat("%");;

            if (recentScore.pp != null) {
                endMessage = endMessage.concat("\nPP:       ").concat(recentScore.pp);
            }

            return endMessage;
        }
    ).catch(() => {
        message.channel.send("Username not found");
    });

    let result = await s; //wait for PromiseResolve
    message.channel.send(result);
}