import { HiddenSearchLabel } from "./SearchBarStyles"

export const SearchBar = () => {
    return(
    <form action="/pleonasm-dict/" method="get">
        <label htmlFor="header-search">
        <HiddenSearchLabel>Search blog posts</HiddenSearchLabel>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Buscar pleonasmos"
            name="s" 
        />
        <button type="submit">Buscar</button>
    </form>
    );
}