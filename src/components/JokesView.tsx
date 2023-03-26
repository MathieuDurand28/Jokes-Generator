interface Props {
    joke: {setup: string, delivery: string}
}

const JokesView = ({joke}: Props) => {
    return (
        <div className="flex flex-col items-center justify-center h-max mt-10 w-full">
            <h1 className="text-2xl text-white text-center">{joke.setup}</h1>
            <p className="text-1xl text-white mt-4 text-center">{joke.delivery}</p>
        </div>
    );
}

export default JokesView;