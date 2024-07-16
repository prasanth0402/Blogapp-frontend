const Post = () => {
  return (
    <div className="mt-0">
      <div className="h-[200px]">
        <div className="max-w-[80%] mx-auto">
          <div className="mt-7 items-center">
            <h2 className=" font-bold text-sm">BLOG ARTICLES</h2>
            <h1 className="lg:text-5xl text-3xl font-bold mt-2">
              ChatGPT's new &#10075;Browse with Bing&#10076;: Watching AIs stalk
              you is odd
            </h1>
          </div>
          <p className=" font-bold mt-5">June 06, 2023</p>
        </div>
      </div>
      <div className="max-w-[77%] mx-auto">
        <div className="mt-2 flex flex-col items-center">
          <p>
            This week, I logged into ChatGPT to continue testing its ChatGPT
            plugins feature, only to notice a new addition to the beta feature
            section: Browse with Bing. Needless to say, I jumped on it — who
            doesn’t love a new toy? — and put it through its paces. However, not
            only was I amazed by how powerful this new feature is, I was a
            little unsettled by how it could be used as well.
          </p>
          <h2 className=" lg:text-4xl text-2xl font-bold mt-2">
            Browse with Bing is ChatGPT&#10076;s answer to Google Bard
          </h2>
          <p className="mt-2">
            If you compare ChatGPT and Google Bard, one of the advantages
            Google&#10076;s Bard has had until now is that it answers you using
            current search data, while ChatGPT has been stuck working off data
            it was trained on from 2021. This means the chatbot didn&#10076;t
            really know much about the world and events after this time.
            Honestly, that&#10076;s terrible; it meant ChatGPT was stuck in time
            at the height of the Covid pandemic. Spare a thought for the poor
            chatbot, stuck e-shopping and thinking Tiger King is the height of
            TV culture. Jokes aside, this limitation has meant while Bard could
            confidently go into detail with its answers, ChatGPT has had to play
            it a bit more coy. After all, how embarrassing would it be if it got
            the current owner of Twitter wrong? But now, this key differentiator
            is gone. OpenAI has said it will start using Bing as the default
            search experience for ChatGPT. While ChatGPT Plus users get first
            access to it, it will soon be rolled out to free users as well,
            erasing the feature lead Bard had. Worse, Bard doesn&#10076;t have
            the Plugins feature yet, so this puts Google solidly behind.
          </p>
          <h2 className="  lg:text-4xl text-2xl font-bold mt-2">
            Bing-powered ChatGPT does multiple searches per query
          </h2>
          <p className="mt-2">
            When you turn on this new feature, one of the immediately obvious
            things is that ChatGPT doesn&#10076;t just do one search, it looks
            around until it gets the answer it&#10076;s after. You can check out
            its thought pattern by clicking on the little button above the
            answer you get, and it&#10076;s honestly fascinating to see the
            hoops it leaps through to get to the final result.
          </p>
          <img
            src="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/screenshots/ai/chatgpt/chatgpt-bing/v2/newsoutlets.jpg"
            alt="image"
            className="mt-2"
          />
          <p className="mt-2">
            In the above example, it was also interesting that it defaulted to
            two US-based news outlets and US-centric headlines, though it did
            include BBC and Aljazeera. It didn&#10076;t include something like
            the Times of India or Deutsche Welle, for example. As an Australian,
            news outlets like the ABC, the Sydney Morning Herald, or the Herald
            Sun would have been more applicable (something that would have come
            up with an actual Bing or Google search). NYT is paywalled, so
            there's also some interesting questions there. In any case, ChatGPT
            doesn&#10076;t always exercise what I&#10076;d call “expert-level
            Google-fu” (Or in this case, Bing-fu) when it comes to looking for
            results. For instance, it might look around Twitter for an answer,
            but utterly ignore other avenues of research, resulting in incorrect
            answers that a bit more diligence would have solved. This sort of
            problem could be solved with a bit more targeted prompt engineering,
            or sequential queries. I&#10076;m sure this is to limit the tokens
            expended per query; if ChatGPT does a search that&#10076;s too
            thorough, there&#10076;s likely less tokens left to respond to you.
            However, if you&#10076;re working with a fairly simple query, it
            doesn&#10076;t need to do multiple searches. For instance,
            here&#10076;s what happened when we asked it to check the latest
            blog post on Pluralsight.com.
          </p>
          <img
            src="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/screenshots/ai/chatgpt/chatgpt-bing/BrowsingBing2.jpg"
            alt=""
          />
          <p className="mt-2">
            At the time of writing, this was correct! Certainly, I could have
            just searched that myself, but I didn&#10076;t need to leave the
            chat window, and this could be done for more niche terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
