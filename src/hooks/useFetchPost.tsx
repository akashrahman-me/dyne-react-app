import { useState } from 'react'

function useFetchPost() {
	const [error, setError] = useState(false)
	const [result, setResult] = useState(null)

	return function (
		url: string,
		options: {},
		method: string = 'POST',
		callback: (response: {}) => void
	) {
		;(async () => {
			setError(false)
			setResult(null)

			try {
				const rawResponse = await fetch(url, {
					method,
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(options),
				})
				const content = await rawResponse.json()

				setError(false)
				setResult(content)
				callback?.(content)
			} catch (err) {
				setError(true)
				setResult(null)
			}
		})()

		return { error, result }
	}
}

export default useFetchPost
