const appendDebugEntry = (config: {
  adminBarSelector: string;
  debugEntryContainerClasses: Array<string>;
  debugEntryContainerTagName: string;
  debugEntryTagName: string;
  debugEntryText: string;
}): void => {
  const adminBar = document.querySelector(config.adminBarSelector);

  if (!adminBar) {
    console.warn('WordPress admin bar is disabled so no debug item has been added');
    return;
  }

  const debugEntryContainer = document.createElement(config.debugEntryContainerTagName);
  debugEntryContainer.classList.add(...config.debugEntryContainerClasses);

  const debugEntry = document.createElement(config.debugEntryTagName);
  debugEntry.textContent = config.debugEntryText;
  debugEntryContainer.appendChild(debugEntry);

  adminBar.appendChild(debugEntryContainer);
};

appendDebugEntry({
  adminBarSelector: '#wpadminbar',
  debugEntryTagName: 'li',
  debugEntryContainerClasses: ['ab-top-secondary', 'ab-top-menu'],
  debugEntryContainerTagName: 'ul',
  debugEntryText: 'Written from TypeScript',
});
