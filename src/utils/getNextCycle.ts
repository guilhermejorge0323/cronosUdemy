export function getNextCycle(currentCucle: number) {
    return currentCucle === 0 || currentCucle === 8 ? 1 : currentCucle + 1;
}