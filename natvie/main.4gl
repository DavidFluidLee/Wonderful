SCHEMA mydatabase

MAIN
    DEFINE web1, res STRING
    CONNECT TO "mydatabase"
    CALL ui.Interface.loadStyles("mystyles")
    CALL ui.Interface.loadActionDefaults("myactions")
    OPEN WINDOW w_main WITH FORM "main"

    INPUT BY NAME web1 WITHOUT DEFAULTS ATTRIBUTES(UNBUFFERED)
        BEFORE INPUT
            CALL Dialog.setActionHidden("cancel", 1)
            CALL Dialog.setActionHidden("accept", 1)
            #CALL Dialog.setActionHidden("exit", 1)
            
           ON ACTION EXIT
           EXIT INPUT
            
    END INPUT

    WHILE fgl_eventLoop()
    END WHILE

END MAIN
