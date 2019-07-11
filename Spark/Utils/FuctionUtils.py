import getopt
import sys

class FuncUtils:

    @staticmethod
    def handle_params(argv):
        type_code = 0
        try:
            opts, args = getopt.getopt(argv, 't:', ['type='])
        except getopt.GetoptError:
            print('Wrong parameters: {}\n'.format(argv))
            sys.exit(2)

        for opt, arg in opts:
            if opt in ('-t', '--type'):
                type_code = int(arg)

        if type_code <= 0:
            raise ValueError('Wrong video type!\n')

        return type_code

    @staticmethod
    def create_filepath(type_code, base_path):
        filepath = r'file:///home/lzr/data/{}{}.csv'.format(
            base_path,
            type_code
        )
        return filepath