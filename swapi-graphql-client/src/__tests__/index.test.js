import { render, cleanup, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { SearchProvider } from "../context/Context"
import PeopleLists, { GET_PAGE_PEOPLE } from '../components'

const mocks = [
    {
        request: {
            query: GET_PAGE_PEOPLE,
            variables: {
                page: 1,
            },
            result: {
                data: {
                    count: 9,
                    next: "",
                    previous: "",
                    results: [
                        {
                            name: "Luke Skywalker",
                            height: 172,
                            mass: "77",
                            gender: "male",
                        },
                        {
                            name: "C-3PO",
                            height: 167,
                            mass: 75,
                            gender: "n/a",
                        },
                    ]
                },
            },
        }
    }
]

describe('People', () => {
    afterEach(cleanup)
    test('renders all todo elements', async () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <SearchProvider>
                    <PeopleLists />
                </SearchProvider>
            </MockedProvider>,
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 0)));
        expect(container).toMatchSnapshot();
    });
})