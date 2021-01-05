export function handleIcon() {
    const html = document.querySelector('html')
    const icons = document.getElementsByClassName('icon')

    if (html.classList.contains('dark-mode')) {
        for(let icon of icons)
            icon.classList.add('dark-icon')
    }
}