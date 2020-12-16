(function (storyContent) {

    // Create ink story from the content using inkjs
    var story = new inkjs.Story(storyContent);

    continueStory()

    function continueStory() {

        if (!story.canContinue && story.currentChoices.length === 0) end();

        $('#story').empty();
        $('#choices').empty();

        while (story.canContinue) {
            // Get ink to generate the next paragraph
            var paragraphText = story.Continue();
            var tags = story.currentTags;

            // Create paragraph element
            $('#story').append(`<p class='story-paragraphs'>${paragraphText}</p>`)
        }

        //check if there are choices
        if (story.currentChoices.length > 0) {
            story.currentChoices.forEach((choice) => {

                $('#choices').append(`<button class="choice" id="choice-${choice.index}">${choice.text}</button>`)

                //When choice is clicked, updated the story index and rerun the loop!
                $(`#choice-${choice.index}`).on('click', () => {
                    story.ChooseChoiceIndex(choice.index);
                    continueStory();
                })

            });
        } else {
            end()
        }


    }

    function end() {
        $('#story').append(`<p class='story-paragraphs end'>THE END</p>`)
    }



})(storyContent);