import React from 'react'
import ai from "../assets/ai.png"

const Ai = () => {
  return (
    <div>
        <section className="intro">
        <h1 class="section__title section__title--intro">
            Reinforcement Learning <strong>Grid Environment</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">Value Iteration using Python</p>
        <img src={ai} alt="Naca Live alt" class = "intro__img"/>
    </section>

    <div class="portfolio__item--individual">
        <p>When you try to get your hands on reinforcement learning, it is likely that Grid World Game is the very 
            first problem you meet with. It is the most basic as well as classic problem in reinforcement learning 
            and by implementing it on your own, I believe, is the best way to understand the basis of reinforcement 
            learning. Meanwhile, it is super fun to implement your own game and see how a robot manage to learn on 
            its own!
        </p>
        <img src={ai} alt=""/>
        <p>
            The rule is simple. Your agent/robot starts at the left-bottom corner(the ‘start’ sign) and
             ends at either +1 or -1 which is the corresponding reward. At each step, the agent has 4 possible
              actions including up, down, left and right, whereas the black block is a wall where your agent
               won’t be able to penetrate through. In order to make it more straight forward, our first 
               implementation assumes that each action is deterministic, that is, the agent will go where
                it intends to go. For instance, when the agent decides to take action up at (2, 0), it will
                 land in (1, 0) rather than (2, 1) or elsewhere. (We will add uncertainty in out second
                  implementation) However, it the agents hit the wall, it will remain at the same position.
        </p>
        <p>Agent
            This is the artificial intelligence part, as our agent should be able to learn from the process
             and thinks like a human. The key of the magic is value iteration.
            Value Iteration
            What our agent will finally learn is a policy, and a policy is a mapping from state to action, 
            simply instructs what the agent should do at each state. In our case, instead of learning a mapping 
            from state to action, we will leverage value iteration to firstly learn a mapping of state to
             value(which is the estimated reward) and based on the estimation, at each state, our agent will
              choose the best action that gives the highest estimated reward.
        </p>
    </div>
    </div>
  )
}

export default Ai