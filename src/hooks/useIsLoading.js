import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const useIsLoading = (bool) => {
    const [isLoading, setIsLoading] = useState(bool)

    const spinner = <FontAwesomeIcon className='spinner' data-testid='spinner' icon={faSpinner} />;
    return [isLoading, setIsLoading, spinner]
}

export default useIsLoading