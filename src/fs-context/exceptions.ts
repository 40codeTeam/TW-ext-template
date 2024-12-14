function createException(name: string) {
    return class extends Error {
        constructor(message?: string) {
            super(message);
            this.name = name;
            if (
                window.callErrorOverlay
                && window.ScratchWaterBoxed
                && window.ScratchWaterBoxed.currentCatchErrors.includes(name)
            ) {
                window.callErrorOverlay(this);
            };
        };
    };
};
export const ExtensionLoadError = createException("ExtensionLoadError");
export const CastError = createException("CastError");
export const GeneratedFailed = createException("GeneratedFailed");
export const SyntaxError = createException("SyntaxError");
export const UncognizedError = createException("UncognizedError");
export const MissingError = createException("MissingError");
export const OnlyInstanceWarn = createException("OnlyInstanceWarn");
export const OverwriteWarn = createException("OverwriteWarn");