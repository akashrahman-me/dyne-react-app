import { useEffect, useState } from 'react'

function useFetch(url: string) {
	const [error, setError] = useState(false)
	const [result, setResult] = useState<any>(null)

	useEffect(() => {
		;(async () => {
			setError(false)

			try {
				const rawResponse = await fetch(url, {
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				})
				const content = await rawResponse.json()

				setError(false)
				setResult(content)
			} catch (err: any) {
				setError(err)
			}
		})()
	}, [url])

	return { error, result }
}

export default useFetch
