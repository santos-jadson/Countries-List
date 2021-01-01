export function handleIcon() {
    const html = document.querySelector('html')
    if (html.classList.contains('dark-mode')) {
        const icons = document.getElementsByClassName('icon')
        for(let icon of icons)
            icon.classList.add('dark-icon')
    }
}