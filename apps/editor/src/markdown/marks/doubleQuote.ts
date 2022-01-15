import { EditorCommand } from '@t/spec';
import Mark from '@/spec/mark';
import { toggleWrappingMark } from '@/markdown/helper/mdCommand';
import { DOMOutputSpecArray } from 'prosemirror-model';

const reDoubleQuote = /^(").*([\s\S]*)(")$/m;
const leftDoubleQuote = '"';
const rightDoubleQuote = '"';

export class DoubleQuote extends Mark {
  get name() {
    return 'doubleQuote';
  }

  get schema() {
    return {
      toDOM(): DOMOutputSpecArray {
        return ['span'];
      },
    };
  }

  commands(): EditorCommand {
    return toggleWrappingMark(reDoubleQuote, leftDoubleQuote, rightDoubleQuote);
  }

  keymaps() {
    const codeCommand = this.commands()();

    return { '"': codeCommand };
  }
}
